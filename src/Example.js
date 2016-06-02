var counter = 0;

function next(){
  return ++counter;
}
function print(){
  return this.publicValue;
}

export default function ExampleFactory(_name){
  var _private = 22;
  var name = _name || 'Tommy Wachi';
  var publicValue = 'some public value';

  function hey(){
    return name;
  }

  function getSecret(pass){
    return pass == '1234' ? _private : null;
  }

  return {
    getSecret,
    hey,
    publicValue,
    next,
    print
  }
}