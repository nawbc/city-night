export const logError = (value: string)=>{
    console.error('Error:' + value);
}

export const logWarn = (value: string)=>{
    console.warn('Warning' + value);
}

export const throwError = (value: string) => {
    throw new Error('Error:' + value);
}
