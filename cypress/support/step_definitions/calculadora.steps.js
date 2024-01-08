import {Given, When, And, Then} from "../../e2e/bdd-cucumber/calculadora/calculadora.feature";

Given(/^To access the app$/, () => {
	return true;
});

And(/^Do a "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^Input the numbers "([^"]*)" and "([^"]*)"$/, (args1,args2) => {
	console.log(args1,args2);
	return true;
});

When(/^Finish the operation$/, () => {
	return true;
});

Then(/^The result should be "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});
