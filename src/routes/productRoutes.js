const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// GET: Lấy tất cả sản phẩm
router.get("/", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// GET: Lấy sản phẩm theo pid
router.get("/:pid", async (req, res) => {
    const product = await Product.findOne({
        pid: req.params.pid
    });

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});

// POST: Thêm sản phẩm
router.post("/", async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json(product);
});

// PUT: Cập nhật sản phẩm
router.put("/:pid", async (req, res) => {
    const product = await Product.findOneAndUpdate(
        { pid: req.params.pid },
        req.body,
        { new: true }
    );

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json(product);
});

// DELETE: Xóa sản phẩm
router.delete("/:pid", async (req, res) => {
    const product = await Product.findOneAndDelete({
        pid: req.params.pid
    });

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.json({
        message: "Product deleted"
    });
});

module.exports = router;