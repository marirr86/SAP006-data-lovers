import { ordering, getGender, getStatus, getSpecies } from '../src/data.js';

const chars = [
  {"name": "Phillip Jacobs", "status": "Alive", "species": "Human", "gender": "Male"},
  {"name": "General Nathan", "status": "Dead", "species": "Human", "gender": "Male"},
  {"name": "Glenn", "status": "Dead", "species": "Alien" ,"gender": "Male"},
  {"name": "Birdperson","status": "Dead", "species": "Alien", "gender": "Male"}];

const charsAZ = [
  {"name": "Birdperson","status": "Dead", "species": "Alien", "gender": "Male"},
  {"name": "General Nathan", "status": "Dead", "species": "Human", "gender": "Male"},
  {"name": "Glenn", "status": "Dead", "species": "Alien" ,"gender": "Male"},
  {"name": "Phillip Jacobs", "status": "Alive", "species": "Human", "gender": "Male"}];

const charsZA = [
  {"name": "Phillip Jacobs", "status": "Alive", "species": "Human", "gender": "Male"},
  {"name": "Glenn", "status": "Dead", "species": "Alien", "gender": "Male"},
  {"name": "General Nathan", "status": "Dead", "species": "Human" ,"gender": "Male"},
  {"name": "Birdperson","status": "Dead", "species": "Alien", "gender": "Male"}];

describe('testing "ordering" function', () => {
  it('is a function', () => {
    expect(typeof ordering).toBe('function');
  });

  it('test if it is ordered from `A-Z`', () => {
    expect(ordering(chars, "A-Z")).toEqual(charsAZ);
  });

  it('test if it is ordered from `Z-A`', () => {
    expect(ordering(chars, "z-a")).toEqual(charsZA);
  });
});

describe('testing "getSpecies" function', () => {
  it('its a function', () => {
    expect(typeof getSpecies).toBe('function');
  });

  it('should filter by status', () => {
    expect(getSpecies(chars, "Male")).toEqual([chars[2]]);
  });

});

describe('testing "getStatus" function', () => {
  it('its a function', () => {
    expect(typeof getStatus).toBe('function');
  });

  it('should filter by status', () => {
    expect(getStatus(chars, "Male")).toEqual([chars[1]]);
  });

});

describe('testing "getGender" function', () => {
  it('its a function', () => {
    expect(typeof getGender).toBe('function');
  });

  it('should filter by gender', () => {
    expect(getGender(chars, "Male")).toEqual([chars[3]]);
  });

});
