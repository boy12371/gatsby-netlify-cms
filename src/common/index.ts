export function isImageInfo(image): boolean {
    if (image.hasOwnProperty("childImageSharp")) {
        return image.childImageSharp ? true : false;
    } else {
        return false;
    }
}
