import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Spin, Table } from "antd";
import { LeftOutlined } from "@ant-design/icons";

interface NormalizedAddress {
    altura: number | null;
    cod_calle: number;
    cod_calle_cruce: number;
    cod_partido: string;
    coordenadas: {
    srid: number;
    x: string;
    y: string;
    };
    direccion: string;
    nombre_calle: string;
    nombre_calle_cruce: string;
    nombre_localidad: string;
    nombre_partido: string;
    tipo: string;
}

interface NormalizedResponse {
    direccionesNormalizadas: NormalizedAddress[];
}

const Results: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState<boolean>(true);
    const [results, setResults] = useState<NormalizedAddress[]>([]);

    useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const address = searchParams.get("direccion");

    if (!address) {
        navigate("/");
        return;
    }

    if (address) {
        const decodedAddress = decodeURIComponent(address);
        axios
        .get<NormalizedResponse>(
        `http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=${decodedAddress}`
        )
        .then((response) => {
            setResults(response.data.direccionesNormalizadas);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            setLoading(false);
        });
    }
    }, [location.search, navigate]);

    const columns = [
    { title: "Dirección", dataIndex: "direccion", key: "direccion" },
    {
        title: "Nombre de Calle",
        dataIndex: "nombre_calle",
        key: "nombre_calle",
    },
    ];

    return (
    <div
        style={{
        width: "75%",
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
    }}
    >
    <div
        style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
    >
        <Link to="/" style={{ marginRight: "10px" }}>
            <Button icon={<LeftOutlined />}></Button>
        </Link>
        <h3 style={{ textAlign: "center", margin: 0 }}>
            Resultados de la Búsqueda
        </h3>
        </div>
        {loading ? (
        <Spin />
        ) : (
        <Table
            dataSource={results}
            columns={columns}
            pagination={false}
            style={{ marginTop: "20px" }}
        />
        )}
    </div>
    );
};

export default Results;
