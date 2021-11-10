export function getState(stateName: string): any {
    let stateValue = localStorage.getItem(stateName);
    if(stateValue){
        return JSON.parse(stateValue);
    }
}
export function setState(stateName: string, stateValue: any): void {
    localStorage.setItem(stateName, JSON.stringify(stateValue));
}