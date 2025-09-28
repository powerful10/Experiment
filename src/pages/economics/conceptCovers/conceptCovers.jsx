import React, { useEffect, useMemo, useState, useRef } from "react";
import "./ConceptCovers.css";

// Microeconomics
import BehavioralImg from "@assets/CCImages/image-asset.webp";
import PpcImg from "@assets/CCImages/image-asset.webp";
import ScaleImg from "@assets/CCImages/image-asset.webp";
import ElasticityImg from "@assets/CCImages/image-asset.webp";
import ExternalitiesImg from "@assets/CCImages/image-asset.webp";
import AsymmetricImg from "@assets/CCImages/image-asset.webp";
import EnvEcoImg from "@assets/CCImages/image-asset.webp";
import PriceDetImg from "@assets/CCImages/image-asset.webp";
import HouseholdImg from "@assets/CCImages/image-asset.webp";
import CapitalLabourImg from "@assets/CCImages/image-asset.webp";
import StatementsImg from "@assets/CCImages/image-asset.webp";
import DecisionImg from "@assets/CCImages/image-asset.webp";
import MeritImg from "@assets/CCImages/image-asset.webp";
import CircularFlowImg from "@assets/CCImages/image-asset.webp";
import BusinessTypesImg from "@assets/CCImages/image-asset.webp";
import DemandSupplyImg from "@assets/CCImages/image-asset.webp";
import MergersImg from "@assets/CCImages/image-asset.webp";
import MonopoliesImg from "@assets/CCImages/image-asset.webp";
import BanksImg from "@assets/CCImages/image-asset.webp";
import UnionsImg from "@assets/CCImages/image-asset.webp";
import BarterImg from "@assets/CCImages/image-asset.webp";
import SpecializationImg from "@assets/CCImages/image-asset.webp";
import ProblemImg from "@assets/CCImages/image-asset.webp";
import FactorsImg from "@assets/CCImages/image-asset.webp";
import OpportunityCostImg from "@assets/CCImages/image-asset.webp";

// Macroeconomics
import GlobalisationImg from "@assets/CCImages/image-asset.webp";
import BusinessCycleImg from "@assets/CCImages/image-asset.webp";
import PhillipsImg from "@assets/CCImages/image-asset.webp";
import InterventionImg from "@assets/CCImages/image-asset.webp";
import GrowthImg from "@assets/CCImages/image-asset.webp";
import PovertyImg from "@assets/CCImages/image-asset.webp";
import SpecializationNationalImg from "@assets/CCImages/image-asset.webp";
import ForexImg from "@assets/CCImages/image-asset.webp";
import InflationImg from "@assets/CCImages/image-asset.webp";
import BalanceImg from "@assets/CCImages/image-asset.webp";
import ADASImg from "@assets/CCImages/image-asset.webp";
import DevelopmentImg from "@assets/CCImages/image-asset.webp";
import SupplySideImg from "@assets/CCImages/image-asset.webp";
import CentralBanksImg from "@assets/CCImages/image-asset.webp";
import MonetaryImg from "@assets/CCImages/image-asset.webp";
import FiscalImg from "@assets/CCImages/image-asset.webp";
import TypesEconomiesImg from "@assets/CCImages/image-asset.webp";
import TradeImg from "@assets/CCImages/image-asset.webp";

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

  // ✅ helper: apply single-card-grid only when total == 1
  const gridClass = (list) =>
    `card-grid ${list.length === 1 && filtered.length === 1 ? "single-card-grid" : ""}`;

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
          <div className={gridClass(microFiltered)}>
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
          <div className={gridClass(macroFiltered)}>
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
