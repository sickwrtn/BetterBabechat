export function parent(element: any,index: number): HTMLElement{
    let result = element; 
    for (let i = 0; i < index; i++) {
        result = result.parentNode;
    }
    return result;
}