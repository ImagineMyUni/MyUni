import University from '../database/models/University';

export const postScoreConverter =  (req, res) => {
    let resultScore = 0, convertedScore;
    const {
        universityName, score
    } = req.body;

    try {
        const converter = University.find({
            universityName: universityName
        }).exec((err, result) => {
            convertedScore = score.map(x => {
                for (var i = 0; i < result[0].gradeBenchmark.length; i++) {
                    if (x >= result[0].gradeBenchmark[i].score) {
                        return result[0].gradeBenchmark[i].grade;
                    }
                }
                return 9;
            }).reduce((total, num) => {
                return total + num;
            });
        });
       
        return res.status(200).json({
            statusCode: 200,
            message: convertedScore / 7
        });

    } catch (error) {
        console.log(error);
        return res.json({
            statusCode: 400,
            message: "Cant find That Univ"
        });

    };
}
