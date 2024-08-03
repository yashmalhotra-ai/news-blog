
const useFormattedDate = (date) => {
    const dateobj = new Date(date);
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const formattedDate = dateobj.toLocaleDateString('en-GB', options);
    return formattedDate;

}

export default useFormattedDate;
