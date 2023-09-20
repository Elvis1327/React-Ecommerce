



// This function return a new string in witch if the lenght of the old string
// was greater than 20 we return a new String
export const truncateString = (data: string | any) => {
    if(data.length > 20){
        return data.slice(0,20) + '...';
    }
    return data;
};
