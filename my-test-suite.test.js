const { describe: describeTest } = require('yargs');
const { calculateDayOfWeek } = require('./appCode');


describe('calculateDayOfWeek', () => {
    test('Good Weather Tests for the correct day of the week for a given date string', () => {
      expect(calculateDayOfWeek('24/03/2023')).toBe('Friday');
      expect(calculateDayOfWeek('25/12/2022')).toBe('Sunday');
    });

    test('Invalid Day Input', () => {
        expect(() => calculateDayOfWeek("32.03.2023")).toThrow('Invalid Day Format');
        expect(() => calculateDayOfWeek("00.03.2023")).toThrow('Invalid Day Format');
    });

    test('Zeros', () =>{
        expect(() => calculateDayOfWeek('00.03.2023').toThrow('Invalid Day Format'));
        expect(() => calculateDayOfWeek('07.00.2023').toThrow('Invalid Month Format'));
        expect(() => calculateDayOfWeek('07.03.0000').toThrow('Invalid Year Format'));
    }); 

    test('Negative Inputs', () =>{
        expect(() => calculateDayOfWeek('-7.03.2023').toThrow('Invalid date format. Please use DD.MM.YYYY, DD-MM-YYYY or DD/MM/YYYY.'));
        expect(() => calculateDayOfWeek('07.-3.2023').toThrow('Invalid date format. Please use DD.MM.YYYY, DD-MM-YYYY or DD/MM/YYYY.'));
        expect(() => calculateDayOfWeek('07.03.-123').toThrow('Invalid date format. Please use DD.MM.YYYY, DD-MM-YYYY or DD/MM/YYYY.'));
    }); 

    test('No Dots/Dashes/Slashes', () =>{
        expect(() => calculateDayOfWeek('07032023').toThrow("Input is too short!"));
        expect(() => calculateDayOfWeek('07 03 2023').toThrow('Invalid date format. Please use DD.MM.YYYY, DD-MM-YYYY or DD/MM/YYYY.'));
    }); 

    test('Multiple Dots/Dashes/Slashes', () =>{
        expect(() => calculateDayOfWeek('07//03//2023').toThrow('Invalid date format. Please use DD.MM.YYYY, DD-MM-YYYY or DD/MM/YYYY.'));
    }); 

    test('Mix of Dots/Dashes/Slashes', () =>{
        expect(() => calculateDayOfWeek('07/03.2023').toThrow('Invalid date format. Please use DD.MM.YYYY, DD-MM-YYYY or DD/MM/YYYY.'));
    }); 

    test('Too Short an Input', () => {
        expect(() => calculateDayOfWeek("31.3.2023")).toThrow("Input is too short!");
    });

    test('Too Big a Year', () => {
        expect(() => calculateDayOfWeek("31.03.20234")).toThrow('Invalid Year Format');
    });

    test('Correct Length Sequence, Wrong Date Format', () => {
        expect(() => calculateDayOfWeek("31.3.20234")).toThrow('Invalid date format. Please use DD.MM.YYYY, DD-MM-YYYY or DD/MM/YYYY.');
    });

    test('Null or Empty Input', () => {
        expect(() => calculateDayOfWeek("")).toThrow("Input is too short!");
        expect(() => calculateDayOfWeek(null)).toThrow("Null value is not accepted");
    });

    test('Nonexisting Dates', () => {
        expect(() => calculateDayOfWeek("31/04/2023")).toThrow('These Months Only Have 30 Days Silly :)')
        expect(() => calculateDayOfWeek("31/06/1984")).toThrow('These Months Only Have 30 Days Silly :)')
        expect(() => calculateDayOfWeek("31/11/1997")).toThrow('These Months Only Have 30 Days Silly :)')
    });

    test('February Leap Year', () => {
        expect(calculateDayOfWeek('29/02/2020')).toBe('Saturday');
        expect(calculateDayOfWeek('29/02/2016')).toBe('Monday');
      });

    test('February Edge Case Dates Non-Leap Year', () => {
        expect(calculateDayOfWeek('28/02/2023')).toBe('Tuesday');
        expect(() => calculateDayOfWeek("29/02/2021")).toThrow('Invalid February Date')
        expect(() => calculateDayOfWeek("30/02/2021")).toThrow('Invalid February Date')
    });

    test('Float, Long , Double Inputs', () => {
        expect(() => calculateDayOfWeek("1./01/2012")).toThrow('Invalid date format. Please use DD.MM.YYYY, DD-MM-YYYY or DD/MM/YYYY.');
        expect(() => calculateDayOfWeek("01/01/20.5")).toThrow('Invalid date format. Please use DD.MM.YYYY, DD-MM-YYYY or DD/MM/YYYY.');
        
      });
    
    test('Correct dates, but with wrong number of digits', () => {
        expect(() => calculateDayOfWeek("01/1/12   ")).toThrow("Invalid date format. Please use DD.MM.YYYY, DD-MM-YYYY or DD/MM/YYYY.");
        expect(() => calculateDayOfWeek("1/1/2012  ")).toThrow("Invalid date format. Please use DD.MM.YYYY, DD-MM-YYYY or DD/MM/YYYY.");
        expect(() => calculateDayOfWeek("01/01/12  ")).toThrow("Invalid date format. Please use DD.MM.YYYY, DD-MM-YYYY or DD/MM/YYYY.");
        
      });
    
    test('Correct dates, but as a String', () => {
        expect(() => calculateDayOfWeek("23rd September, 2012")).toThrow("Invalid date format. Please use DD.MM.YYYY, DD-MM-YYYY or DD/MM/YYYY.");
    });


    
});




