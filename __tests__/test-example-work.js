import React from 'react';
import {shallow} from 'enzyme';
import ExampleWork,{ExampleWorkBubble} from '../js/example-work';


const myWork=[
  {
    'title': "Work Example",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title': "Work Example",
    'image': {
      'desc': "example screenshot of a project involving chemistry",
      'src': "images/example2.png",
      'comment': ""
    }
  }
];



describe("ExampleWorks component",() => {
  let component = shallow(<ExampleWork work={myWork}/>);
   it("Should section element",() => {
     expect(component.type()).toEqual('section');
   });
   it("Should contain children",() => {
     expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
 });

describe("ExampleWorkBubble component",() => {
     let component = shallow(<ExampleWorkBubble example={myWork[1]} />);
     let images = component.find("img");
     it("Should contain Single img",() =>{
         expect(images.length).toEqual(1);
     });
     it("Should have correcct img src",() =>{
          expect(images.node.props.src).toEqual(myWork[1].image.src);
     });
});



});
