class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query
        this.queryStr = queryStr
    }

    filter() {
        const queryObject = { ...this.queryStr }
        const excludedFields = ["page", "sort", "limit", "fields"]
        excludedFields.forEach(el => delete queryObject[el])

        let queryStr = JSON.stringify(queryObject)
        queryStr = JSON.parse(queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`))

        this.query = this.query.find(queryStr);
        return this
    }

    sort() {
        if (this.queryStr.sort) {
            const sortBy = this.queryStr.sort.split(",").join(" ")
            this.query = this.query.sort(sortBy)
        } else {
            this.query = this.query.sort('-createdAt')
        }
        return this
    }

    limitFields() {
        if (this.queryStr.fields) {
            const selectByFields = this.queryStr.fields.split(",").join(" ")
            this.query = this.query.select(selectByFields)
        } else {
            this.query = this.query.select("-__v")
        }
        return this
    }

    pagination() {
        const page = this.queryStr.page * 1 || 1;
        const limit = this.queryStr.limit * 1 || 25;
        const skip = (page - 1) * limit

        this.query = this.query.skip(skip).limit(limit)

        return this
    }
}

module.exports = ApiFeatures