export default function trial() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'world'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());