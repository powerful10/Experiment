import React, { useEffect, useMemo, useState, useRef } from "react";
import "./ConceptCovers.css";

// ✅ Import all images
import BehavioralImg from "../../assets/CCImages/image-asset.webp";
import PpcImg from "../../assets/CCImages/production-possibility-curve.webp";
import ScaleImg from "../../assets/CCImages/economies-of-scale.webp";
import ElasticityImg from "../../assets/CCImages/price-elasticity-of-demand.webp";
import ExternalitiesImg from "../../assets/CCImages/externalities.webp";
import AsymmetricImg from "../../assets/CCImages/asymmetric-information.webp";
import EnvEcoImg from "../../assets/CCImages/environmental-economics.webp";
import PriceDetImg from "../../assets/CCImages/price-determinants.webp";
import HouseholdImg from "../../assets/CCImages/household-spending-saving.webp";
import CapitalLabourImg from "../../assets/CCImages/capital-vs-labour.webp";
import StatementsImg from "../../assets/CCImages/positive-normative-statements.webp";
import DecisionImg from "../../assets/CCImages/rational-decision.webp";
import MeritImg from "../../assets/CCImages/merit-goods.webp";
import CircularFlowImg from "../../assets/CCImages/circular-flow.webp";
import BusinessTypesImg from "../../assets/CCImages/business-organizations.webp";
import DemandSupplyImg from "../../assets/CCImages/demand-supply.webp";
import MergersImg from "../../assets/CCImages/mergers.webp";
import MonopoliesImg from "../../assets/CCImages/monopolies.webp";
import BanksImg from "../../assets/CCImages/commercial-banks.webp";
import UnionsImg from "../../assets/CCImages/trade-unions.webp";
import BarterImg from "../../assets/CCImages/bartering.webp";
import SpecializationImg from "../../assets/CCImages/specialization.webp";
import ProblemImg from "../../assets/CCImages/economic-problem.webp";
import FactorsImg from "../../assets/CCImages/factors-of-production.webp";
import OpportunityCostImg from "../../assets/CCImages/opportunity-cost.webp";

// Macroeconomics
import GlobalisationImg from "../../assets/CCImages/globalisation.webp";
import BusinessCycleImg from "../../assets/CCImages/business-cycle.webp";
import PhillipsImg from "../../assets/CCImages/phillips-curve.webp";
import InterventionImg from "../../assets/CCImages/government-intervention.webp";
import GrowthImg from "../../assets/CCImages/economic-growth.webp";
import PovertyImg from "../../assets/CCImages/poverty.webp";
import SpecializationNationalImg from "../../assets/CCImages/national-specialization.webp";
import ForexImg from "../../assets/CCImages/foreign-exchange-rates.webp";
import InflationImg from "../../assets/CCImages/inflation-deflation.webp";
import BalanceImg from "../../assets/CCImages/balance-of-payments.webp";
import ADASImg from "../../assets/CCImages/aggregate-demand-supply.webp";
import DevelopmentImg from "../../assets/CCImages/development-economies.webp";
import SupplySideImg from "../../assets/CCImages/supply-side-policy.webp";
import CentralBanksImg from "../../assets/CCImages/central-banks.webp";
import MonetaryImg from "../../assets/CCImages/monetary-policy.webp";
import FiscalImg from "../../assets/CCImages/fiscal-policy.webp";
import TypesEconomiesImg from "../../assets/CCImages/types-of-economies.webp";
import TradeImg from "../../assets/CCImages/international-trade.webp";

// ✅ Map concept → image
const imageMap = {
  // Micro
  "Introduction to Behavioral Economics": BehavioralImg,
  "Production Possibility Curve": PpcImg,
  "Economies of Scale": ScaleImg,
  "Price Elasticity of Demand": ElasticityImg,
  "Externalities": ExternalitiesImg,
  "Introduction to Asymmetric Information": AsymmetricImg,
  "Environmental Economics": EnvEcoImg,
  "Price Determinants": PriceDetImg,
  "Influences on Household Spending, Saving, and Borrowing": HouseholdImg,
  "Capital and Labour Intensive Productions Comparison": CapitalLabourImg,
  "Positive and Normative Statements": StatementsImg,
  "Rational Decision Making": DecisionImg,
  "Merit Goods": MeritImg,
  "The Circular Flow of Income and Spending": CircularFlowImg,
  "Types of Business Organizations": BusinessTypesImg,
  "Demand and Supply": DemandSupplyImg,
  "Mergers": MergersImg,
  "Monopolies": MonopoliesImg,
  "Commercial Banks": BanksImg,
  "Trade Unions": UnionsImg,
  "Bartering": BarterImg,
  "Specialization": SpecializationImg,
  "The Economic Problem": ProblemImg,
  "Factors of Production": FactorsImg,
  "Opportunity Cost": OpportunityCostImg,

  // Macro
  "Globalisation": GlobalisationImg,
  "Business Cycle": BusinessCycleImg,
  "Phillips Curve": PhillipsImg,
  "Government Intervention": InterventionImg,
  "Economic Growth": GrowthImg,
  "Poverty": PovertyImg,
  "National Specialization": SpecializationNationalImg,
  "Foreign Exchange Rates": ForexImg,
  "Inflation and Deflation": InflationImg,
  "Balance of Payments": BalanceImg,
  "Aggregate Demand & Aggregate Supply": ADASImg,
  "Development of Economies": DevelopmentImg,
  "Supply Side Policy": SupplySideImg,
  "Central Banks": CentralBanksImg,
  "Monetary Policy": MonetaryImg,
  "Fiscal Policy": FiscalImg,
  "Types of Economies": TypesEconomiesImg,
  "International Trade": TradeImg,
};

const microList = Object.keys(imageMap).filter((k) =>
  [
    "Introduction to Behavioral Economics",
    "Production Possibility Curve",
    "Economies of Scale",
    "Price Elasticity of Demand",
    "Externalities",
    "Introduction to Asymmetric Information",
    "Environmental Economics",
    "Price Determinants",
    "Influences on Household Spending, Saving, and Borrowing",
    "Capital and Labour Intensive Productions Comparison",
    "Positive and Normative Statements",
    "Rational Decision Making",
    "Merit Goods",
    "The Circular Flow of Income and Spending",
    "Types of Business Organizations",
    "Demand and Supply",
    "Mergers",
    "Monopolies",
    "Commercial Banks",
    "Trade Unions",
    "Bartering",
    "Specialization",
    "The Economic Problem",
    "Factors of Production",
    "Opportunity Cost",
  ].includes(k)
);

const macroList = Object.keys(imageMap).filter((k) =>
  [
    "Globalisation",
    "Business Cycle",
    "Phillips Curve",
    "Government Intervention",
    "Economic Growth",
    "Poverty",
    "National Specialization",
    "Foreign Exchange Rates",
    "Inflation and Deflation",
    "Balance of Payments",
    "Aggregate Demand & Aggregate Supply",
    "Development of Economies",
    "Supply Side Policy",
    "Central Banks",
    "Monetary Policy",
    "Fiscal Policy",
    "Types of Economies",
    "International Trade",
  ].includes(k)
);

const makeCardData = (title, section, idx) => ({
  id: `${section}-${idx}`,
  title,
  section,
  img: imageMap[title] || "",
  href: "#",
});

export default function ConceptCovers() {
  const allCards = useMemo(
    () => [
      ...microList.map((t, i) => makeCardData(t, "Microeconomics", i)),
      ...macroList.map((t, i) => makeCardData(t, "Macroeconomics", i)),
    ],
    []
  );

  const [query, setQuery] = useState("");
  const [visibleIds, setVisibleIds] = useState(new Set());
  const containerRef = useRef(null);

  // reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");
          if (entry.isIntersecting) {
            setVisibleIds((prev) => new Set(prev).add(id));
          }
        });
      },
      { threshold: 0.12 }
    );

    const el = containerRef.current;
    if (!el) return;
    el.querySelectorAll(".card").forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allCards;
    return allCards.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.section.toLowerCase().includes(q)
    );
  }, [allCards, query]);

  const microFiltered = filtered.filter((c) => c.section === "Microeconomics");
  const macroFiltered = filtered.filter((c) => c.section === "Macroeconomics");

  return (
    <div className="ap-container">
      <header className="ap-header">
        <h1>APonomics — Concept Covers</h1>

        <div className="search-wrap">
          <input
            className="search-input"
            placeholder="Search concepts (e.g. 'Elasticity', 'Inflation')"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="search-hint">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>
      </header>

      <main ref={containerRef} className="ap-main">
        <section className="section">
          <h2>Microeconomics</h2>
          <div className="card-grid">
            {microFiltered.map((card) => (
              <article
                key={card.id}
                className={`card ${visibleIds.has(card.id) ? "visible" : ""}`}
                data-id={card.id}
              >
                <img src={card.img} alt={card.title} className="card-img" />
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <a className="card-link" href={card.href}>
                    Read More →
                  </a>
                </div>
              </article>
            ))}
            {microFiltered.length === 0 && (
              <div className="empty-state">No microeconomics results.</div>
            )}
          </div>
        </section>

        <section className="section">
          <h2>Macroeconomics</h2>
          <div className="card-grid">
            {macroFiltered.map((card) => (
              <article
                key={card.id}
                className={`card ${visibleIds.has(card.id) ? "visible" : ""}`}
                data-id={card.id}
              >
                <img src={card.img} alt={card.title} className="card-img" />
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <a className="card-link" href={card.href}>
                    Read More →
                  </a>
                </div>
              </article>
            ))}
            {macroFiltered.length === 0 && (
              <div className="empty-state">No macroeconomics results.</div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
