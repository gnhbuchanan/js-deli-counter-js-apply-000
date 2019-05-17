function takeANumber (line, name){
  
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
  
}



function nowServing(line){
  
  if(line.length === 0){
    return 'There is nobody waiting to be served!'
  }
  
  let element = line.unshift();
  
  //console.log(line);
  
  return `Currently serving ${line}`; 
  
}