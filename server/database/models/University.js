import mongoose from 'mongoose';
const ConverterSchema = new mongoose.Schema({
    score: { type: Number },
    grade: { type: Number }
});

const UniversitySchema = new mongoose.Schema({
    universityName: { type: String, required: true },
    gradeBenchmark: { type: [ConverterSchema]}
    // koreanWeight: { type: Number, required: true },
    // englishWeight: { type: Number, required: true },
    // historyWeight: { type: Number, required: true },
    // mathWeight: { type: Number, required: true },
    // socialWeight: { type: Number, required: true },
    // scienceWeight: { type: Number, required: true },

    // selectedWeight: { type: Number, required: true },

    // absenceDays: { type: Number, required: false, default: 0 }
    // ethicWeight: { type: Number, default: 0 },
    // technologyWeight: { type: Number, default: 0 },
    // PEWeight: { type: Number, default: 0 }, // PE === Physical Education
    // musicWeight: { type: Number, default: 0 },
    // artWeight: { type: Number, default: 0 }
});

// UniversitySchema.statics.create = (univName, kor, eng, his, math, social, science, sel) => {
//     const newUniversity = new model({
//         universityName: univName,
//         koreanWeight: kor,
//         englishWeight: eng,
//         historyWeight: his,
//         mathWeight: math,
//         socialWeight: social,
//         scienceWeight: science,
//         selectedWeight: sel,

//     })
// }

const University = mongoose.model("University", UniversitySchema);

export default University;
