export const buildTweetDetail = (tweet) => {
    const placeholderImage = "https://demofree.sirv.com/nope-not-here.jpg";

    const createdAt = new Date(tweet.createdAt);
    const image = tweet.image ?? placeholderImage;
    return `
        <div>
            <h3>${tweet.user.username} escribió el ${createdAt.toLocaleString()}: </h3>
            <h4>${tweet.content}</h4>
            <img src="${image}" />
            ${tweet.likes > 0 ? `<p>${tweet.likes} likes</p>` : "<p>Nadie dio like a este tweet</p>"}
        </div>
    `
}