function MakeProfile(id, name, mail, phone, imageUrl, imageSize) {
    return {
        id: id,
        name: name,
        mail: mail,
        phone: phone,
        imageUrl: imageUrl,
        imageSize: imageSize,
    }
}

export default MakeProfile;