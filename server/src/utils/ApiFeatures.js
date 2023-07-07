class ApiFeatures {
    constructor(mongooseQuery, queryString) {
        this.mongooseQuery = mongooseQuery;
        this.queryString = queryString;
    }
    paginate() {
        // 1- pagination 
        let page = +this.queryString.page > -1 ? +this.queryString.page : 1;
        let limit = this.queryString.limit || 5;
        let skip = this.queryString.skip || (page - 1) * limit;
        console.log("params:", this.queryString.page, "page: " + page, "limit: ", limit, "skip: ", skip);
        this.mongooseQuery.skip(skip).limit(limit);
        this.page = page;
        return this;
    };
    filter() {
        // 2- filter  By White List 
        let whiteList = ["price", "quantity", "keyword", "name", "slug", "description", "priceAfterDiscount", "color", "imageCover", "images", "sold", "ratingCount", "category", "subcategory", "brand", "createdAt", "updatedAt"]
        let finalQuery = {};
        whiteList.map(ele => { this.queryString[ele] && (finalQuery[ele] = this.queryString[ele]) });

        finalQuery = JSON.stringify(finalQuery).replace(/(gte|gt|lte|lt)/g, match => `$${match}`)
        finalQuery = JSON.parse(finalQuery);
        console.log("finalQuery: ", finalQuery);
        this.mongooseQuery.find(finalQuery)
        return this;
    }
    sort() {
        if (this.queryString.sort) {
            let sortedBy = this.queryString.sort.split(",").join(" ");
            this.mongooseQuery.sort(sortedBy)
        };
        return this;
    }
    search() {
        if (this.queryString.keyword) {
            console.log(this.queryString.keyword)
            this.mongooseQuery.find({
                $or: [
                    { name: { $regex: this.queryString.keyword, $options: "i" } },
                    { description: { $regex: this.queryString.keyword, $options: "i" } }
                ]
            })
        };
        return this;
    }
    fields() {
        // Select Fields
        if (this.queryString.felids) {
            let felids = this.queryString.felids.split(",").join(" ")
            this.mongooseQuery.select(felids)
        };
        return this;
    }

}
module.exports = ApiFeatures;