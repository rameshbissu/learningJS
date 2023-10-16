const paginate = (followers) => {
    const itemsPerPage = 9;
    const numberOfPages = Math.ceil(followers.length / itemsPerPage);
    const newFollwers = Array.from({length:numberOfPages},(_,index)=>{
        const start = index * itemsPerPage;
        return followers.slice(start,start + itemsPerPage)
    })
    return newFollwers;

}

export default paginate
