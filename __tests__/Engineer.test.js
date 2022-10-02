const Engineer = require('../lib/Engineer')

describe('class: Engineer', () => {
    describe('properties', () => {
        it('Has a name property that is a string' , () => {
            const engineer = new Engineer('Madeline Ramos', 1, 'maddieeramos@gmail.com', 'MadelineRamos');
            expect(engineer.hasOwnProperty('name')).toBeTruthy();
            expect(typeof engineer.name).toBe('string');
        });

        it('Has an id property that is a number', () => {
            const engineer = new Engineer('Madeline Ramos', 1, 'maddieeramos@gmail.com', 'MadelineRamos');
            expect(engineer.hasOwnProperty('id')).toBeTruthy();
            expect(typeof engineer.id).toBe('number');
        });

        it('Has an email property that is a string', () => {
            const engineer = new Engineer('Madeline Ramos', 1, 'maddieeramos@gmail.com', 'MadelineRamos');
            expect(engineer.hasOwnProperty('email')).toBeTruthy();
            expect(typeof engineer.email).toBe('string');
        });

        it('Has a github property that is a string' , () => {
            const engineer = new Engineer('Madeline Ramos', 1, 'maddieeramos@gmail.com', 'MadelineRamos');
            expect(engineer.hasOwnProperty('gitHub')).toBeTruthy();
            expect(typeof engineer.gitHub).toBe('string');
        });
    });

    describe('methods', () => {
        describe('getName', () => {
            it('Should return the name of the engineer', () => {
                const engineer = new Engineer('Madeline Ramos', 1, 'maddieeramos@gmail.com', 'MadelineRamos');
                expect(engineer.getName()).toBe('Madeline Ramos');
            });
        });

        describe('getId', () => {
            it('Should return the id of the engineer', () => {
                const engineer = new Engineer('Madeline Ramos', 1, 'maddieeramos@gmail.com', 'MadelineRamos');
                expect(engineer.getId()).toBe(1);
            });
        });

        describe('getEmail', () => {
            it('Should return the email of the engineer', () => {
                const engineer = new Engineer('Madeline Ramos', 1, 'maddieeramos@gmail.com', 'MadelineRamos');
                expect(engineer.getEmail()).toBe('maddieeramos@gmail.com');
            });
        });

        describe('getRole', () => {
            it('Should return the role of the engineer', () => {
                const engineer = new Engineer('Madeline Ramos', 1, 'maddieeramos@gmail.com', 'MadelineRamos');
                expect(engineer.getRole()).toBe('Engineer');
            });
        });

        describe('getGithub', () => {
            it('Should return the github of the engineer', () => {
                const engineer = new Engineer('Madeline Ramos', 1, 'maddieeramos@gmail.com', 'MadelineRamos');
                expect(engineer.getGithub()).toBe('MadelineRamos');
            });
        });
    });
});