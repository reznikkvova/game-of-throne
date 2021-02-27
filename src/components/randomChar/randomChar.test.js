import React from 'react';
import RandomChar from './randomChar';
import {shallow} from 'enzyme';

describe('Testing <RandomChar/>.', () => {

   const char = shallow(<RandomChar />);

  describe('Testing snap and state', () => { 
      it('RadnomChar has correclty render', () => {
         expect(char).toMatchSnapshot();
      });
      it('RandomChar state "char" is empty object', () => {
         expect(char.state().char).toBeObject();
      });
      it('RandomChar state "loading" is true', () => {
         expect(char.state().loading).toBeTruthy();
      });
      it('RandomChar state "error" is false', () => {
        expect(char.state().error).toBeFalsy();
      });
  });

  describe('Handlers tests', () => {
      it('Testing onCharLoaded', () => {
         char.instance().onCharLoaded();
         expect(char.state().loading).toBeFalsy();
      });
      it('Testing onError', () => {
         char.instance().onError();
         expect(char.state().loading).toBeFalsy();
         expect(char.state().error).toBeTruthy();
      });
       it('Testing updateChar', () => {
         char.instance().onCharLoaded();
         expect(char.state().loading).toBeFalsy();
      });
  });
  
});
