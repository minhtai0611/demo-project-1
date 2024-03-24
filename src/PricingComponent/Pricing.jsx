import styled from "./Pricing.module.css";
import HeaderReplica from "../HeaderReplicaComponent/HeaderReplica";
export default function Pricing() {
    return (
        <>
            <HeaderReplica />
            <section className={styled.all}>
                <p>Pricing</p>
            </section>
            <table className={styled.p + " " + styled["gayathri-bold"] + " " + styled.table}>
                <thead>
                    <tr>
                        <th>Standard</th>
                        <th>Professional</th>
                        <th>Enterprise</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i className="fa fa-check" aria-hidden="true" /> Access to a limited selection of ebooks and magazines</td>
                        <td><i className="fa fa-check" aria-hidden="true" /> Full access to Everbook extensive library</td>
                        <td><i className="fa fa-check" aria-hidden="true" /> Unlimited access to all content</td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-check" aria-hidden="true" /> Basic search and browsing features</td>
                        <td><i className="fa fa-check" aria-hidden="true" /> Advanced search and browsing options</td>
                        <td><i className="fa fa-check" aria-hidden="true" /> Customizable browsing features</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><i className="fa fa-check" aria-hidden="true" /> Personalized recommendations</td>
                        <td><i className="fa fa-check" aria-hidden="true" /> Highly personalized recommendations</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><i className="fa fa-check" aria-hidden="true" /> Dedicated account manager</td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-check" aria-hidden="true" /> Standard customer support</td>
                        <td><i className="fa fa-check" aria-hidden="true" /> Priority customer support</td>
                        <td><i className="fa fa-check" aria-hidden="true" /> Custom integrations and support for large-scale use</td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-check" aria-hidden="true" /> $5/month</td>
                        <td><i className="fa fa-check" aria-hidden="true" /> $15/month</td>
                        <td><i className="fa fa-check" aria-hidden="true" /> Contact for custom pricing</td>
                    </tr>
                    <tr>
                        <td><button type="button" className={styled["gayathri-bold"]}>Choose a standard plan</button></td>
                        <td><button type="button" className={styled["gayathri-bold"]}>Choose a professional plan</button></td>
                        <td><button type="button" className={styled["gayathri-bold"]}>Contact Sales</button></td>
                    </tr>
                </tbody>
            </table>
        </>

    )
}