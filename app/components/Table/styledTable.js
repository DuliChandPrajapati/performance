import style from 'styled-components';

const StyledTable = style.div`
    &&.cstm-table {
        padding: 20px 0 30px;
    }

    table {
        text-align:center;
        width: 100%;
        box-shadow: 0px 4px 13px -1px rgba(0,0,0,0.2);
        -webkit-box-shadow: 0px 4px 13px -1px rgba(0,0,0,0.2);
        -moz-box-shadow: 0px 4px 13px -1px rgba(0,0,0,0.2);
        border-radius: 7px;
        -webkit-border-radius: 7px;
        -moz-border-radius: 7px;
        -ms-border-radius: 7px;
        overflow: hidden;
    }

    table thead {
        background:  #e3e3e3;
    }

    table th {
        padding:  10px 15px;
        background:  #e3e3e3;
        position: relative;
    }

    table th:after {
        content:  "";
        display:  block;
        background: #eee;
        width: 1.5px;
        height: 35px;
        position: absolute;
        right: 0;
        bottom: 5px;
    }

    table th:last-child:after {
        display: none;
    }

    table tr {
        background: #fff;
    }

    table tr td {
        padding: 10px 15px;    
    }

    table tr:nth-child(even) {
        background: #f9fcff;
    }

    @media(max-width: 767px) {
        &&.cstm-table {{
            overflow-x: scroll;
        }

        table th:after {
            bottom: 6px;
        }

        table th {
            padding: 5px 15px; 
            font-size: 14px;
            line-height: 20px; 
        }

        table {
            min-width: 400px;
        }
        
        table tr td {
            font-size: 13px;
            padding: 5px 10px;
        }

    }
`;

export default StyledTable;
