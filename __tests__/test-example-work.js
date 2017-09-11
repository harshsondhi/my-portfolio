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
  it("Should span element",()=>{
    expect(component.type()).toEqual('span');
  });

  it("Should contain children",()=>{
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
  });

  it("Shouls allow the model Oen and close",()=>{
    component.instance().openModal();
    expect(component.instance().state.modalOpen).toBe(true);
    component.instance().closeModal();
    expect(component.instance().state.modalOpen).toBe(false);
  });


});




describe("ExampleWorkBubble component",()=>{
  let mockOpenModalFn = jest.fn();
  let component = shallow(<ExampleWorkBubble example={myWork[1]}
    openModal={mockOpenModalFn} />);
  let images = component.find("img");
   it("Should contain Single img",()=>{
     expect(images.length).toEqual(1);
   });

   it("Should have correcct img src",()=>{
       expect(images.node.props.src).toEqual(myWork[1].image.src);
   });

   it("Should call the openModal handler when clicked",() => {
       component.find(".section__exampleWrapper").simulate('click');
       expect(mockOpenModalFn).toHaveBeenCalled();
   });


});
