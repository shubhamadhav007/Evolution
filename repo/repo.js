function Student(name, roll_no, class_, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.class_ = class_;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;
    this.printTop3Subjects = function() {
        let marks = this.marks_of_5_subjects;
        let sortedMarks = Object.keys(marks).sort(function(a, b) {
            return marks[b] - marks[a];
        });
        console.log("Top 3 subjects based on marks:");
        console.log(sortedMarks.slice(0, 3));
    };
    this.printReportCard = function() {
        let marks = this.marks_of_5_subjects;
        let totalMarks = 0;
        for (let subject in marks) {
            totalMarks += marks[subject];
        }
        let percentage = (totalMarks / 500) * 100;
        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log("| Name     - " + this.name + " |");
        console.log("| Roll no. - " + this.roll_no + "      |");
        console.log("| Class    - " + this.class_ + "       |");
        console.log("| Section  - " + this.section + "       |");
        console.log("| Science  - " + marks.science + "      |");
        console.log("| S.Sc     - " + marks.social_science + "      |");
        console.log("| Maths    - " + marks.maths + "      |");
        console.log("| English  - " + marks.english + "      |");
        console.log("| Hindi    - " + marks.hindi + "      |");
        console.log("| Prectage - " + percentage.toFixed(1) + " %  |");
        console.log("+--------------------+");
    };
}
