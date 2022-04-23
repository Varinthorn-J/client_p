const express = require("express"),
  app = express(),
  passport = require("passport"),
  port = process.env.PORT || 80,
  cors = require("cors"),
  cookie = require("cookie");

const bcrypt = require("bcrypt");
const { json } = require("express");

const db = require("./databaseori.js");
let users = db.users;


let products = {
  list: [{ id: 1, name: "  เพียวริน่า วัน เท็นเดอร์ ซีเล็กซ์ เบลนด์ ", numberproduct: 1 }],
};

require("./passport.js");

const router = require("express").Router(),
  jwt = require("jsonwebtoken");

app.use("/api", router);
router.use(cors({ origin: "http://localhost:3000", credentials: true }));
// router.use(cors())
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

//Get payment
router.get(
  "/Payment",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.send({ status: "Payment" });
  }
);

//product
router.route("/products").get((req, res) => res.json(products));
router.post(
  "/products",

  (req, res) => {
    try {
      let newProduct = {};
      newProduct.id = products.list.length
        ? products.list[products.list.length - 1].id + 1
        : 1;
      newProduct.name = req.body.name;
      newProduct.numberproduct = req.body.numberproduct;

      products = { list: [...products.list, newProduct] };
      res.json(products);
    } catch {
      res.json({ status: "Add Fail" });
    }
  }
);
router
  .route("/products/:pd_id")
  .get((req, res) => {
    let ID = products.list.findIndex((item) => item.id === +req.params.pd_id);
    if (ID >= 0) {
      res.json(products.list[ID]);
    } else {
      res.json({ status: "Product Error can't find!" });
    }
  })

  .put((req, res) => {
    let ID = products.list.findIndex((item) => item.id === +req.params.pd_id);

    if (ID >= 0) {
      products.list[ID].name = req.body.name;
      products.list[ID].numberproduct = req.body.numberproduct;

      res.json(products);
    } else {
      res.json({ status: "Product Error can't find!" });
    }
  })

  .delete((req, res) => {
    let ID = products.list.findIndex((item) => item.id === +req.params.pd_id);

    if (ID >= 0) {
      products.list = products.list.filter(
        (item) => item.id !== +req.params.pd_id
      );
      res.json(products);
    } else {
      res.json({ status: "Product Error can't find!" });
    }
  });

//login
router.post("/login", (req, res, next) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    console.log("Login: ", req.body, user, err, info);
    if (err) return next(err);
    if (user) {
      const token = jwt.sign(user, db.SECRET, {
        expiresIn: req.body.ischeck === "on" ? "7d" : "1d",
      });
      // req.cookie.token = token
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 60 * 60,
          sameSite: "strict",
          path: "/",
        })
      );
      res.statusCode = 200;
      return res.json({ user, token });
      
    } else return res.status(422).json(info);
  })(req, res, next);
});

router.get("/logout", (req, res) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: -1,
      sameSite: "strict",
      path: "/",
    })
  );
  res.statusCode = 200;
  return res.json({ message: "Logout successful" });
});

/* GET user profile. */
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.send(req.user);
  }
);

router.post("/register", async (req, res) => {
  try {
    const SALT_ROUND = 10;
    const { name, surname, username, email, password } = req.body;
    if (!name || !surname || !username || !email || !password)
      return res.json({ message: "Cannot register with empty string" });
    if (db.checkExistingUser(username) !== db.NOT_FOUND)
      return res.json({ message: "Duplicated user" });

    let id = users.users.length
      ? users.users[users.users.length - 1].id + 1
      : 1;
    hash = await bcrypt.hash(password, SALT_ROUND);
    users.users.push({ id, username, password: hash, email });
    res.status(200).json({ message: "Register success" });
  } catch {
    res.status(422).json({ message: "Cannot register" });
  }
});

router.get("/alluser", (req, res) => res.json(db.users.users));

router.get("/", (req, res, next) => {
  res.send("Respond without authentication");
});

// Error Handler
app.use((err, req, res, next) => {
  let statusCode = err.status || 500;
  res.status(statusCode);
  res.json({
    error: {
      status: statusCode,
      message: err.message,
    },
  });
});

// Start Server
app.listen(port, () => console.log(`Server is running on port ${port}`));
