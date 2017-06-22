Template.registerHelper('cmsBlockContentRowClasses', () => {
    return {
      class: 'mdl-cell mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone'
    }
});

Template.registerHelper('equals', (a, b) => {
  return a === b;
});

showToast = (message) => {
  'use strict';
  setTimeout(function(){ alert(message); }, 3000);
}

uploadDirPrefix = () => {
  return '/upload/'
}

CSVToArray = (csv) => {
  const array = csv.split(';')

  array.forEach((element, index, array) => {
    array[index] = element.trim()
  })

  return array
}

/************LOGIN STUFF******************/
isAdmin = () => {
  if(Meteor.userId()===null){
    return false;
  }
  else{
     return true;
  }
}

isAdminRedirect = () => {
  if(Meteor.userId()===null){
    FlowRouter.go('/')
    FlowRouter.redirect('/')
  }
}