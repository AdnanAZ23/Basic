import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Form = forwardRef(({ onDelete }, ref) => {
    const schema = yup.object().shape({
        Country: yup.string().required(),
        Currency: yup.string().required(),
        Min: yup.number().positive().integer().min(1).test({
            name: "minMax",
            message: "Min value should be less than Max value",
            test: function (value) {
                return value < this.parent.Max;
            },
        }).required("Must put a value for Minimum"),
        Max: yup.number().positive().integer().max(10).test({
            name: "maxMin",
            message: "Max value should be greater than Min value",
            test: function (value) {
                return value > this.parent.Min;
            },
        }).required("Must put a value for Maximum"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    const [selectedCurrency, setSelectedCurrency] = useState("Dollar");
    const [selectedCountry, setSelectedCountry] = useState("USA");

    const submitForm = () => {
        handleSubmit(onSubmit)()
    };

    useImperativeHandle(ref, () => ({
        submitForm: submitForm
    }));

    return (
        <form className="form-container">
            <select
                className="select-box"
                value={selectedCurrency} {...register("Currency")}
                onChange={(e) => setSelectedCurrency(e.target.value)}
            >
                <option value="Dollar">Dollar</option>
                <option value="Pound">Pound</option>
                <option value="Euro">Euro</option>
            </select>
            <select
                className="select-box"
                value={selectedCountry} {...register("Country")}
                onChange={(e) => setSelectedCountry(e.target.value)}
            >
                <option value="USA">USA</option>
                <option value="British">British</option>
                <option value="Canada">Canada</option>
            </select>

            <div className="input-container">
                <label className="input-label">Min</label>
                <input className="input-field" type="number" {...register("Min")} />
                <p className="error-message">{errors.Min?.message}</p>
            </div>
            <div className="input-container">
                <label className="input-label">Max</label>
                <input className="input-field" type="number" {...register("Max")} />
                <p className="error-message">{errors.Max?.message}</p>
            </div>
            <div>
                <button className="delete-button" type="button" onClick={onDelete}>
                    Delete
                </button>
            </div>
        </form>
    );
});