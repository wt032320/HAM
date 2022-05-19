import request from "../utils/request"

export function getNewsInfo() {
    return request.get("admin/news/info")
}