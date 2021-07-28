import { Form, Formik, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";
import { FormField, Button, Label } from "semantic-ui-react";
import KodlamaTextInput from "../utilities/customFormControls/KodlamaTextInput";
import { useHistory } from "react-router-dom";
import ProductService from "../services/productService";

export default function ProductAdd() {
  let productService = new ProductService();
  const initialValues = {
    productName: "asss",
    unitPrice: 10,
    category: { categoryId: 1 },
    unitsInStock: 1,
    quantityPerUnit: "açiklama",
  };
  const history = useHistory();
  const schema = Yup.object({
    productName: Yup.string().required("Ürün Adı Zorunludur"),
    unitPrice: Yup.number().required("Ürün Fiyatı Zorunludur"),
  });

  return (
    <div>
      <h3>Ürün Ekleme Formu</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          productService
            .addProduct(values)
            .then((result) => console.log(result.data.data));
          history.push("/");
        }}
      >
        <Form className="ui form">
          <strong>
           
            <label>Ürün Adı</label>
          </strong>
          <KodlamaTextInput name="productName" placeholder="Ürün Adı" />
          <br />

          <strong>
            <label>Ürün Fiyatı</label>
          </strong>
          <KodlamaTextInput name="unitPrice" placeholder="Ürün Fiyatı" />
          <br />

          <strong>
         
            <label>Ürün Stok</label>
          </strong>
          <KodlamaTextInput name="unitsInStock" placeholder="Ürün Stoğu" />
          <br />

          <strong>
            <label>Ürün Açıklma</label>
          </strong>
          <KodlamaTextInput
            name="quantityPerUnit"
            placeholder="Ürün Açıklaması"
          />
          <br />

          <strong>
          
            <label>Ürün Kategori</label>
          </strong>
          <KodlamaTextInput name="category.categoryId" placeholder="Kategori" />
          <br />

          {/* <FormField >
            <label>Ürün Adı</label>
               <Field name="productName" placeholder="Ürün Adı"></Field>
                    <ErrorMessage name="productName" render={error=>
                        <Label pointing basic color="red" content={error}></Label>
                    }></ErrorMessage>
            </FormField> */}

          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
