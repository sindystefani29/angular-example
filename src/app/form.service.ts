export class FormService{
    getCourseArr(){
        return ['arr1', 'arr2', 'arr3']
    }
    logStatus(str: string){
        console.log('Current Status: ' + str)
    }
}