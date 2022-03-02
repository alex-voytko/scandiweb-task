const idMaker = products => {
    const gotArrOfIds = products.map(product => product.id);
    const maxValue = Math.max.apply(Math, gotArrOfIds);
    return maxValue + 1;
};

export default idMaker;
