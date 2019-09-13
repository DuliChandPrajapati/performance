import style from 'styled-components';

const StyledTeamTable = style.div`
    .table-btns {
        font-size: 19px;
        font-weight:  bold;
        color: #4e4e4e;
        padding:  10px 0 20px;
    }

    .table-btns button {
        background:  #fff;
        border:  none;
        margin: 0 5px 0 20px;
        padding: 7px 20px;
        font-size: 17px;
        line-height:  22px;
        border-radius:  30px;
    }

    .table-btns button.active {
        background: #ec7936;
        color: #fff;
    }

    @media(max-width: 767px) {
        &&.cstm-table {
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
            font-size: 14px;
            padding: 5px 15px;
        }

        .table-btns {
            font-size: 13px;
        }

        .table-btns button {
            margin: 0 5px;
            padding: 5px 15px;
            font-size: 11px;
            line-height: 22px;
        }
    }
`;

export default StyledTeamTable;
