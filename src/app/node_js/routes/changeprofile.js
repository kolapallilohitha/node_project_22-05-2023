const express = require('express');
const { getAddress } = require('../controllers/AddressesController');
const {getProfiles, getProfile, createProfile, updateprofile, deleteContact, getAllAddress, uploadProfile, downloadUsers, downloadById } = require('../controllers/Change-profile-controller.js')
const router = express.Router()

router.route("/").get(getProfiles).post(createProfile);
router.route("/:id").get(getProfile).put(updateprofile).delete(deleteContact);
router.route("/address").get(getAllAddress)
router.route("/:userid/address").get(getAddress)
router.route("/:id/upload").post(uploadProfile)
router.route("/download").get(downloadUsers)
router.route("/download/:id").get(downloadById)

module.exports = router