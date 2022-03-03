const sliceTitle = title =>
    title.length > 26 ? title.slice(0, 26) + '...' : title;

export default sliceTitle;
