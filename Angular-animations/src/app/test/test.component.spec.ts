import { compute, greet, getCurrencies, VoteComponent, TodoFormComponent, TestComponent } from './test';
import { FormBuilder } from '@angular/forms';
import { TestService } from './test.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

// test single class with toBe()
describe('compute', () => {
  it('should return 0 if input is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  })

  it('should increment the input if it is positive', () => {
    const result = compute(1);
    expect(result).toBe(2);
  })
});

// test one class with toContain()
describe('greet', () => {
  it('should include the name in the message', () => {
    const result = greet('mosh');
    expect(result).toContain('mosh');
  })
})

// test array elements using toContain()
describe('getCurrencies', () => {
  it('should return the supported currencies', () => {
    const result = getCurrencies();
    expect(result).toContain('USD'),
    expect(result).toContain('EUR'),
    expect(result).toContain('AUD')
  })
})


// test a component with beforeEach(), not() and subscribe()
describe('VoteComponent', () => {
  let component: VoteComponent;
  beforeEach(() => {
    // Arrange, prepare an object to be tested
    component = new VoteComponent();
  })

  it('should inrement totalVotes when upvoted', () => {
    // Act, do something to this object
    component.upVote();
    // Assert, compare two results
    expect(component.totalVotes).toBe(1);
  })

  it('should decrement totalVotes when downvoted', () => {
    // Act, do something to this object
    component.downVote();
    // Assert, compare two results
    expect(component.totalVotes).toBe(-1);
  })

  it('should raise voteChanged event when upvoted', () => {
    let totalVotes = null;
    component.voteChanged.subscribe(newTotalVotes => {
      totalVotes = newTotalVotes;
    })

    component.upVote()

    // expect(totalVotes).not.toBeNull();
    expect(totalVotes).toBe(1);
  })

})

// test a form
describe('TodoFormComponent', () => {
  var component: TodoFormComponent;

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  })

  // test if 2 form controls exist
  it('should create a form with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  })

  it('should make the name control required', () => {
    let control = component.form.get('name');
    control.setValue('');

    expect(control.valid).toBeFalsy();
  })
})


// test with a service and spy
describe('TestComponent', () => {
  let component: TestComponent;
  let service: TestService;

  beforeEach(() => {
    service = new TestService(null);
    component = new TestComponent(service);
  })

  it('should set tests property with the items returned from a service', () => {
    let tests = [1, 2, 3];

    // call service getTests(), and set the value from db of this service to [1, 2, 3]
    spyOn(service, 'getTests').and.callFake(() => {
      return Observable.from([tests])
    })

    component.ngOnInit();

    expect(component.tests).toBe(tests);
  })
})

