type c = {
    cardimage: string,
    heading: string,
    favimage: string,
    courseSubject: string,
    courseGrade: number,
    additionalCourseGrade: Number,
    courseLength: {
        units: number,
        lessons: number,
        topics: number,
    },
    classoption: string,
    arrowimage: string,
    totalstudents: string;
    previewimage: string,
    manageimage: string,
    gradeimage: string,
    reportimage: string,
};

type p = {
    Carddetails: c[];
}

export { p, c };


