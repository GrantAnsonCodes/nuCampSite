import { baseUrl } from "../app/shared/BaseUrl";

export const mapImageURL = (arr) => {
    return arr.map((item) => {
        return {
            ...item,
            image: baseUrl + item.image
        };
    });
};