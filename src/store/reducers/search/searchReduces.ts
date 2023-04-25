
interface searchState {
    list: []
}

let initState: searchState = {
    list: []
}
const SearchInput: (state: any, action: any) => any = (perState = initState, action) => {
    // console.log(perState, action)
    let { type, data } = action
    // console.log(type,data)
    if (type === 'SEARCH') {
        // console.log(perState)
        // perState.push(data);
        let updatedList = [...perState.list, data];
        // console.log(perState)
        return { ...perState, list: updatedList };
    }else if(type === 'DETELE'){
        sessionStorage.clear();
        return perState
    } else {
        return perState
    }
}

export default SearchInput