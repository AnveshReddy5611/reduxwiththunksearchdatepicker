export const IMAGES={
    TRIPIFY_BANNER:require('./images/banner.png'),
    EMPTY_TRIPS: require('./images/banner.png'),
    EMPTY_EXPENSES:require('./images/banner.png'),
    ADD_EXPENSES_BANNER:require('./images/tripsthumbnails/Trip-bro.png'),

}
export const ICONS={
    BACK_ICON:require('./icons/back.png')


}
export const THUMBNAILS={
    1:require('./images/tripsthumbnails/Trip-bro.png'),
    2:require('./images/tripsthumbnails/Trip-cuate.png'),
    3:require('./images/tripsthumbnails/Closed Stores-pana.png'),
    4:require('./images/tripsthumbnails/Flood-amico.png'),
    5:require('./images/tripsthumbnails/Life in a city-amico.png'),
    6:require('./images/tripsthumbnails/Trip-bro.png'),
    7:require('./images/tripsthumbnails/Trip-cuate.png'),
    8:require('./images/tripsthumbnails/Closed Stores-pana.png'),
    9:require('./images/tripsthumbnails/Flood-amico.png'),
    10:require('./images/tripsthumbnails/Life in a city-amico.png'),

}
export const RANDOM_THUMBNAIL=()=>{
    const rand=Math.floor(Math.random()*10);
    return THUMBNAILS[rand]
}