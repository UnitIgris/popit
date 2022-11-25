export default function useFetchData() {
    return function (url) {
        return fetch((url), {
            method: 'get',
        })
            .then(res => res.json())
            .then(data => data)
    }
}