module.exports = () => {
    const data = { users: []}
    let abc = true

    // думаю, что это будет не нужно
    for (let i = 0; i < 100; i++) {
        abc = !abc
        data.users.push({
            aboutMe: `developer`,
            contacts: {facebook: null, website: null, vk: null, twitter: null, instagram: null},
            currentCity: "Minsk",
            fullName: `user${i}`,
            lookingForAJob: abc,
            lookingForAJobDescription: null,
            online: "online",
            photos: {small: null, large: null},
            status: `${aboutMe} ${fullName}`,
            userId: i})
    }
}