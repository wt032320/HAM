import request from "../utils/request"

export function getTopicList(data) {
    return request.post("topic/lists", data)
}

export function getExamList() {
    return request.get("exam/lists")
}

export function setExamRecord(data) {
    return request.post("exam/records", data)
}

export function getExamRecord(id) {
    return request.get(`exam/records/${id}`)
}

export function getRecordDetails(id) {
    return request.get(`exam/details/${id}`)
}

