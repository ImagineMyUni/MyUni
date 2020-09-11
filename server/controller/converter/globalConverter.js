/* 대학 이름은 뒤에 Univ 빼고 */ 

const ALL = 1;
const MAIN = 2;
const HIGHER = 3;
const ETC = 4;

const INTMAX = 2100000000;

function gradeMaker(score, g) {
    for (var i = 0; i < g.length; i++){
        if (score >= g[i]) return i + 1;
    }
    return g.length;
}

function scoreMaker(score, g, s) {
    for (var i = 0; i < g.length; g++){
        if (score >= g[i])
            return s[i];
    }
}

export function kaya(status, korean, english, math, society, science, history, choice) {
    if (status !== 1)
        return null;
    
    let summation = korean + english + math + society + science + history + choice;
    let avg = summation / 7, grade;
   
    let standard = [INTMAX, 100, 91, 86, 81, 76, 71, 66, 61];
    grade = gradeMaker(avg, standard);

    return {
        university: "가야대학교",
        grade
    };
};

export function kacheon(status, korean, english, math, society, science, history, choice) {
    if (status !== 1)
        return null;
    
    let summation = korean + english + math + society + science + history + choice;
    let avg = summation / 7, grade;
    let g = [100, 95, 90, 80, 60, 0];
    let s = [99.25, 99, 98.5, 97.5, 60, 30];

    let score = scoreMaker(avg, g, s);

       return {
        university: "가천대학교",
        score
    };
};

export function catholickwan(status, korean, english, math, society, science, history, choice) {
    if (status !== 1)
        return null;
    
    let summation = korean + english + math + society + science + history + choice;
    let avg = summation / 7, score;

    if (avg >= 90) score = 90;
    else 
        score = (250 + (avg * 7.5));

       return {
        university: "가톨릭관동대학교",
        score
    };
};

export function gangneung_wonju(status, korean, english, math, society, science, history, choice) {
    if (status !== 1)
        return null;
    
    let summation = korean * 3 + english * 3 + math * 3+ society * 2+ science  * 2+ history  *2+ choice * 2;
    let avg = summation / 7, grade;

    let standard = [INTMAX, INTMAX, INTMAX, 100, 97, 94, 91, 85, 75];
    grade = gradeMaker(avg, standard);

       return {
        university: "강릉원주대학교",
        grade
    };
};

export function kwangwon(status, korean, english, math, society, science, history, choice) {
    if (status !== 1)
        return null;
    
    let summation = korean *3+ english*3 + math*3 + society*2 + science*2 + history*2;
    let avg = summation / 7, grade;

    let standard = [INTMAX, INTMAX, 95, 90, 85, 80, 75, 70, 60];

    grade = gradeMaker(avg, standard);

       return {
        university: "강원대학교",
        grade
    };
};
export function daegu_catholic(status, korean, english, math, society, science, history, choice) {
    if (status !== 1)
        return null;
    
    let summation = korean + english + math + society + science + history + choice;
    let avg = summation / 7;

    let g = [INTMAX, 96, 90, 84, 78, 72, 66, 0];

    let grade = gradeMaker(avg, g);

       return {
        university: "대구가톨릭대학교",
        grade
    };
};
export function dongeu(status, korean, english, math, society, science, history, choice) {
    if (status !== 1)
        return null;
    
    let summation = korean + english + math + society + science + history + choice;
    let avg = summation / 7, score, base = 100;
    
    if (avg >= 85) {
        score = 300 - (100 - avg) * 15 + base;
    } else {
        score = 75 - (85 - avg) * 3 + base;
    }

    return {
        university: "동의대학교",
        score
    };
};

export function mockpo_haeyang(status, korean, english, math, society, science, history, choice) {
    if (status !== 1)
        return null;
    
    let  score;

    let g = [97, 95, 90, 85, 80, 75, 70, 65, 0];
    let kg = gradeMaker(korean, g);
    let eg = gradeMaker(english, g);
    let mg = gradeMaker(math, g);
    let sg = gradeMaker(society, g);
    let scg = gradeMaker(science, g);
    let hg = gradeMaker(history, g);
    let cg = gradeMaker(choice, g);

    let gavg = ((kg + eg + mg + sg + scg + hg + cg) - 1) / 8;
    score = 1000 * (1 - gavg);

       return {
        university: "목포해양대",
        score
    };
};

export function baeksuk(status, korean, english, math, society, science, history, choice) {
    if (status !== 1)
        return null;

    let arr = [korean, english, math, society, science, history, choice].sort();
    arr.shift(); arr.shift();
    
    let summation = [].reduce((a, b) => a + b, 0);
    let score = summation / 5 * 9 + 70;

       return {
        university: "백석대학교",
        score
    };
};

export function kyungki(status, korean, english, math, society, science, history, choice) {
    if (status !== 1)
        return null;
    
    let grade;

    let g = [INTMAX, INTMAX, 100, 96, 90, 85, 80, 75, 0];
    let kg = gradeMaker(korean, g);
    let eg = gradeMaker(english, g);
    let mg = gradeMaker(math, g);
    let sg = gradeMaker(society, g);
    let scg = gradeMaker(science, g);
    let hg = gradeMaker(history, g);
    let cg = gradeMaker(choice, g);

    grade = parseInt((kg + eg + mg + sg + scg + hg + cg) / 7, 10);

       return {
        university: "경기대학교",
        grade
    };
};
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
// export function kacheon(status, korean, english, math, society, science, history, choice) {
//     if (status !== 1)
//         return null;
    
//     let summation = korean + english + math + society + science + history + choice;
//     let avg = summation / 7, grade;

//     if (avg >= 100) grade = 99.25;
//     else if (avg >= 95) grade = 99;
//     else if (avg >= 90) grade = 98.5;
//     else if (avg >= 80) grade = 97.5;
//     else if (avg >= 60) grade = 60;
//     else if (avg >= 0) grade = 30;

//        return {
//         university: "가천대학교",
//         grade : i
//     };
// };
