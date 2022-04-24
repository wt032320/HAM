import request from "../utils/request"

export function setNewArticle(data) {
   return request.post("bbs/new", data)
}

export function getArticleList() {
    return request.get("bbs/lists", {
        noAuth: true
    })
}

export function getArticleDetail(id) {
    return request.get(`bbs/detail/${id}`, {
        noAuth: true
    })
}