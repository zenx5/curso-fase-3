interface TypeStat {
    id:         string,
    courseId:   string,
    email:      string,
    score:      number,
    userId:     string
}

interface TypeCourse {
    id:         string,
    approved:   number,
    ended:      number,
    started:    number,
    level:      number,
    name:       string,
    subname:    string,
    icon:       string,
    image:      string
}