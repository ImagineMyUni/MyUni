/**
 * type 0 : Avg score function
 * type 1 : Each Score
 * type 2 : Avg Score
 * type 3 : Each grade
 * type 4 : Avg grade
 * type 5 : Total Score function 
 */

import mongoose from 'mongoose';
import a from 'mongoose-function';
a(mongoose);

const UniversitySchema = new mongoose.Schema({
    university: { type: String },
    area: { type: String },
    type: { type: Number },
    weight: { type: [Number] },
    standard: { type: [Number] },
    result: { type: [Number] },
    func: { type: Function },
    link: { type: String },
});

UniversitySchema.statics.typeZero = async (kor, eng, his, math, society, science, select) => {
    
    // avg 구해서 함수 통과시키기
    const university = await University.find({ type: 0 })
        .then((document) => {
            return document.map(doc => {
                const avg = (kor * doc.weight[0] + eng * doc.weight[1] +
                    his * doc.weight[2] + math * doc.weight[3] + society * doc.weight[4] + science * doc.weight[5] + select * doc.weight[6]) /
                    (doc.weight.reduce((a, b) => a + b, 0));
                
                const converted = doc.func(avg);
                return {
                    university: doc.university,
                    area: doc.area,
                    converted,
                    link:doc.link
                };
            });
        })
        .catch(err => {
            console.log("typeZero", err);
            return {
                university: "NULL",
                converted: 0,
            }
        });
    
    return university;
};

UniversitySchema.statics.typeOne = async (kor, eng, his, math, society, science, select) => {
    let scores = [kor, eng, math, society, science, his, select];
    const university = await University.find({ type: 1 })
        .then((document) => {
            return document.map(univ => {
                let hab = 0, idx = 0;

                const resultScore = scores.map(score => {
                    for (var i = 0; i < univ.standard.length; i++){
                        if (score >= univ.standard[i]) {
                            return univ.result[i];
                        }
                    }
                })

                for (var i = 0; i < univ.weight.length; i++){
                    resultScore[i] *= univ.weight[i];
                    hab += univ.weight[i];
                }
                
                const converted = resultScore.reduce((a, b) => a + b, 0); 

                return {
                    university: univ.university,
                    area: univ.area,
                    converted,
                    link: univ.link
                }
            });
        })
        .catch(err => {
            console.log(err);
            return {
                university: "NULL",
                converted: 0,
            }});
    
    return university;
};

// type 2 : Avg Score --> Converted Score and make AVERAGE
UniversitySchema.statics.typeTwo = async (kor, eng, his, math, society, science, select) => {
    let scores = [kor, eng, math, society, science, his, select];
    const university = await University.find({ type: 2 })
        .then((document) => {
            return document.map(univ => {
                let thisScores = scores.map(score => score);
                let hab = 0, weightHab = 0;
                
                for (var i = 0; i < univ.weight.length; i++) {
                    thisScores[i] *= univ.weight[i];
                    hab += thisScores[i];
                    weightHab += univ.weight[i];
                }

                const avgScore = hab / weightHab;

                for (var i = 0; i < univ.standard.length; i++) {
                    if (avgScore >= univ.standard[i]) {
                        return {
                            university: univ.university,
                            area: univ.area,
                            converted: univ.result[i],
                            link: univ.link
                        };
                    };
                };
            });
        })
        .catch(err => {
            console.log(err);
            return {
                university: "NULL",
                converted: 0,
            }
        });
    
    return university;
};

// type 3 : Each Score --> Grade and Make that AVERAGE
UniversitySchema.statics.typeThree = async (kor, eng, his, math, society, science, select) => {
    let scores = [kor, eng, math, society, science, his, select];

    const university = await University.find({ type: 3 })
        .then((document) => {
            return document.map(univ => {
                let gradeSum = 0, weightSum = 0;
                let grade = scores.map(score => {
                    for (var i = 0; i < univ.standard.length; i++) {
                        if (score >= univ.standard[i])
                            return univ.result[i];
                    }
                })

                for (var i = 0; i < univ.weight.length; i++) {
                    gradeSum += (grade[i] * univ.weight[i]);
                    weightSum += univ.weight[i];
                }

                const converted = gradeSum / weightSum;
                
                return {
                    university: univ.university,
                    area: univ.area,
                    converted,
                    link: univ.link
                };
            });
        })
        .catch(err => {
            console.log(err);
            return {
                university: "NULL",
                converted: 0,
            }
        });
    
    return university;
};

UniversitySchema.statics.typeFour = async function (kor = null, eng = null, his = null, math = null, society = null, science, select) {
    let scores = [kor, eng, math, his, society, science, select];
    const university = await University.find({type:4})
        .then((document) => {
            return document.map(univ => {
                let hab = 0, weightHab = 0, thisScores = scores.map(x=>x);
                // weight 곱하기 + type 4니까 avg grade ㄱㄱ
                for (var i = 0; i < scores.length; i++) {
                    thisScores[i] *= univ.weight[i];
                    hab += thisScores[i];
                    weightHab += univ.weight[i];
                }
                
                let avg = hab / weightHab, converted;

                for (var i = 0; i < univ.standard.length; i++) {
                    if (avg >= univ.standard[i]) {
                        converted = univ.result[i];
                        break;
                    }
                }

                return {
                    university: univ.university,
                    area: univ.area,
                    converted,
                    link: univ.link
                }
            });
        })
        .catch(err => {
            console.log(err);
            return {
                university: "NULL",
                converted: 0,
            }
        });
    
    return university;
};

// Total Score Function 
UniversitySchema.statics.typeFive = async function (kor = null, eng = null, his = null, math = null, society = null, science, select) {
    
    // avg 구해서 함수 통과시키기
    const university = await University.find({ type: 5 })
        .then((document) => {
            return document.map(doc => {
                const totalWeightedScore = (kor * doc.weight[0] + eng * doc.weight[1] +
                    his * doc.weight[2] + math * doc.weight[3] + society * doc.weight[4] + science * doc.weight[5] + select * doc.weight[6]);
                
                const converted = doc.func(totalWeightedScore);
                return {
                    university: doc.university,
                    area: doc.area,
                    converted,
                    link : doc.link
                };
            });
        })
        .catch(err => {
            console.log(err);
            return {
                university: "NULL",
                converted: 0,
            }
        });
    
    return university;
};

const University = mongoose.model("University", UniversitySchema);

export default University;
