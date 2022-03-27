import {raiseCalculator, handleCalculate} from './functions'

describe('functions -> raiseCalculator', () => {
    test('should return 1.2 for a 5 year experience input', () => {
      expect(raiseCalculator(5)).toEqual(1.2)
    })
  
    test('should return 1.6 for a 12 year experience input', () => {
      expect(raiseCalculator(12)).toEqual(1.6)
    })
  })


  describe('functions -> handleCalculate', () => {
    test('should return 23,004 for a teacher with 5 years of experience, in 2020 in Stockholm', () => {
      expect(handleCalculate({location:'Stockholm', field:'Teacher', experience:5, year:'2020'})).toEqual(23004)
    })
  
    test('should return 33,480 for a developer with 14 years of experience, in 2020 in Gothenburg', () => {
        expect(handleCalculate({location:'Gothenburg', field:'Developer', experience:14, year:'2020'})).toEqual(33480)
      })
  })
  