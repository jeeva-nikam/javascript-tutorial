
var definition =
      `1. hoistnig is a javascript mechanism where a special keyword called undefined is assigned to the variable(var not let & const) in 
the memory allocation phase so that we can use that variable even before initialisation without any error(except undefined)

  2. In memory allocation instead undefined the function code is assigned agains the function name

  3. If we try to access let before initialisation(assigning values to let) like var it will throw 
        Uncaught ReferenceError: Cannot access 'letVariable' before initialization
  4. If we try to access the var/let/const variable without initialisation then we get error- 
        Uncaught ReferenceError: varVariable is not defined`;

let el = document.getElementById('definitionPara');
el.innerHTML = definition;

var varVariableGlobal = "red";
let a = "a";
function printBlueColor() {
      // console.log("varVariable-", varVariable);
      // console.log("letVariable-", letVariable);

      var varVariableParent = "varVariableValue";
      let letVariable = "letVariableValue";

      console.log("letVariable--", letVariable);

      function childFunction() {
            var varVariableChild = "varVariableChildVal";
            console.log("varVariableParent", this.varVariableParent);
            console.log("this.varVariableGlobal", this.varVariableGlobal);
            function a() {
                  var ss = "a";
                  console.log(varVariableChild);
                  function s() {
                        console.log(ss);
                  }
                  s();
            }
            a();
      }
      childFunction();
}

printBlueColor();



/*1. hoistnig is a javascript mechanism where a special keyword called undefined is assigned to the variable(var not let & const) in 
the memory allocation phase so that we can use that variable even before initialisation without any error(except undefined)
  2. In memory allocation instead undefined the function code is assigned agains the function name

  3. If we try to access let before initialisation(assigning values to let) like var it will throw 
        Uncaught ReferenceError: Cannot access 'letVariable' before initialization
  4. If we try to access the var/let/const variable without initialisation then we get error- 
        Uncaught ReferenceError: varVariable is not defined
  */




