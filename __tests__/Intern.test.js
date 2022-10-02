const Intern = require('../lib/Intern')

describe('class: Intern', () => {
    describe('methods', () => {
        describe('getName', () => {
            it('Should return the name of the intern', () => {
                const intern = new Intern('Madeline Ramos', 1, 'maddieeramos@gmail.com', 'UNC-Chapel Hill');
                expect(intern.getName()).toBe('Madeline Ramos');
            });
        });

        describe('getId', () => {
            it('Should return the id of the intern', () => {
                const intern = new Intern('Madeline Ramos', 1, 'maddieeramos@gmail.com', 'UNC-Chapel Hill');
                expect(intern.getId()).toBe(1);
            });
        });

        describe('getEmail', () => {
            it('Should return the email of the intern', () => {
                const intern = new Intern('Madeline Ramos', 1, 'maddieeramos@gmail.com', 'UNC-Chapel Hill');
                expect(intern.getEmail()).toBe('maddieeramos@gmail.com');
            });
        });

        describe('getRole', () => {
            it('Should return the role of the intern', () => {
                const intern = new Intern('Madeline Ramos', 1, 'maddieeramos@gmail.com', 'UNC-Chapel Hill');
                expect(intern.getRole()).toBe('Intern');
            });
        });

        describe('getSchool', () => {
            it('Should return the school of the intern', () => {
                const intern = new Intern('Madeline Ramos', 1, 'maddieeramos@gmail.com', 'UNC-Chapel Hill');
                expect(intern.getSchool()).toBe('UNC-Chapel Hill');
            });
        });
    });
});